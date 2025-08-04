USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnLoadedContainerOutWO_History]    Script Date: 01/10/2024 1:32:47 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnLoadedContainerOutWO_History](
	[trnLoadedContainerOutWO_HistoryID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnLoadedContainerOutWOID] [bigint] NOT NULL,
	[trnLoadedContainerOutWOPrefix] [varchar](100) NULL,
	[trnLoadedContainerOutWONo] [varchar](100) NULL,
	[TransactionType] [varchar](50) NULL,
	[WeighmentRequired] [bit] NOT NULL,
	[NonWeighmentReason] [varchar](255) NULL,
	[WeighmentPaymentMode] [varchar](5) NULL,
	[ManualSSRNo] [varchar](255) NULL,
	[TransportatiOnType] [varchar](5) NULL,
	[TruckNo] [varchar](255) NULL,
	[TruckID] [int] NULL,
	[Transporter] [varchar](255) NULL,
	[TransporterID] [int] NULL,
	[Remarks] [varchar](max) NULL,
	[YearID] [int] NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[caption] [varchar](255) NULL,
	[VehicleType] [varchar](50) NULL,
	[IsFinished] [bit] NOT NULL,
	[IsApproved] [bit] NOT NULL,
	[ApproveRemarks] [varchar](255) NULL,
	[UnApproveRemarks] [varchar](255) NULL,
	[ApprovedDate] [datetime] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnLoadedContainerOutWO_History] ADD  DEFAULT ((0)) FOR [IsFinished]
GO

ALTER TABLE [dbo].[trnLoadedContainerOutWO_History] ADD  DEFAULT ((0)) FOR [IsApproved]
GO


