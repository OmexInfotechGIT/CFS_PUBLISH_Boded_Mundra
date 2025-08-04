USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnPreProforma]    Script Date: 11/28/2022 8:34:37 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnPreProforma](
	[trnPreProformaID] [int] IDENTITY(1,1) NOT NULL,
	[trnPreProformaPrefix] [varchar] (255) NULL,
	[trnPreProformaNo] [varchar] (255) NULL,
	[CycleID] [int] NULL,
	[CycleName] [varchar](255) NULL,
	[ImporterID] [int] NULL,
	[ImporterName] [varchar](255) NULL,
	[ExporterID] [int] NULL,
	[ExporterName] [varchar](255) NULL,
	[CHAID] [int] NULL,
	[CHAName] [varchar](255) NULL,
	[ForwarderID] [int] NULL,
	[ForwarderName] [varchar](255) NULL,
	[ConsolerID] [int] NOT NULL,
	[ConsolerName] [varchar](255) NOT NULL,
	[BillToCustomerID] [int] NOT NULL,
	[BillToCustomerName] [varchar](255) NOT NULL,
	[BillToCustomerAddressID] [int] NULL,
	[BillToCustomerAddress] [varchar](255) NULL,
	[BillToCustomerGSTNo] [varchar](15) NULL,
	[BookingType] [char](1) NULL,
	[GSTCustomerTypeID] int NULL,
	[AssessableValue] decimal(10,2) NULL,
	[DutyValue] decimal(10,2) NULL,
	[StateName] varchar(255) NULL,
	[StateID] int NULL,
	[Remarks] varchar(255) NULL,
	[IsContainerHandling] bit NOT NULL,
	[IsCargoHandling] bit NOT NULL,
	[IsContainerStorage] bit NOT NULL,
	[IsCargoStorage] bit NOT NULL,
	[IsReserveArea] bit NOT NULL,
	[IsContainerStorageSlabwise] bit NOT NULL,
	[IsCargoStorageSlabwise] bit NOT NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL,
	[IsFinished] [BIT] NOT NULL,
	[IsApproved] [BIT] NOT NULL,
	[ApproveRemarks] VARCHAR(255) NULL,
	[UnApproveRemarks] VARCHAR(255) NULL,
	[ApprovedDate] [datetime] NULL

) ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnPreProforma] ADD  CONSTRAINT [DF_trnPreProforma_ConsolerID]  DEFAULT ((0)) FOR [ConsolerID]
GO

ALTER TABLE [dbo].[trnPreProforma] ADD  CONSTRAINT [DF_trnPreProforma_BillToCustomerID]  DEFAULT ((0)) FOR [BillToCustomerID]
GO
 
ALTER TABLE [dbo].[trnPreProforma] ADD  CONSTRAINT [DF_trnPreProforma_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnPreProforma] ADD  CONSTRAINT [DF_trnPreProforma_IsFinished]  DEFAULT ((0)) FOR [IsFinished]
GO

ALTER TABLE [dbo].[trnPreProforma] ADD  CONSTRAINT [DF_trnPreProforma_IsApproved]  DEFAULT ((0)) FOR [IsApproved]
GO

ALTER TABLE [dbo].[trnPreProforma] ADD  CONSTRAINT [DF_trnPreProforma_IsContainerHandling]  DEFAULT ((0)) FOR [IsContainerHandling]
GO

ALTER TABLE [dbo].[trnPreProforma] ADD  CONSTRAINT [DF_trnPreProforma_IsCargoHandling]  DEFAULT ((0)) FOR [IsCargoHandling]
GO

ALTER TABLE [dbo].[trnPreProforma] ADD  CONSTRAINT [DF_trnPreProforma_IsContainerStorage]  DEFAULT ((0)) FOR [IsContainerStorage]
GO

ALTER TABLE [dbo].[trnPreProforma] ADD  CONSTRAINT [DF_trnPreProforma_IsCargoStorage]  DEFAULT ((0)) FOR [IsCargoStorage]
GO

ALTER TABLE [dbo].[trnPreProforma] ADD  CONSTRAINT [DF_trnPreProforma_IsReserveArea]  DEFAULT ((0)) FOR [IsReserveArea]
GO

ALTER TABLE [dbo].[trnPreProforma] ADD  CONSTRAINT [DF_trnPreProforma_IsContainerStorageSlabwise]  DEFAULT ((0)) FOR [IsContainerStorageSlabwise]
GO

ALTER TABLE [dbo].[trnPreProforma] ADD  CONSTRAINT [DF_trnPreProforma_IsCargoStorageSlabwise]  DEFAULT ((0)) FOR [IsCargoStorageSlabwise]
GO

ALTER TABLE [dbo].[trnPreProforma] ADD  CONSTRAINT [DF_trnPreProforma_CreatedDate]  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO

 