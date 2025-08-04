USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnPreProformaCargoHandling]    Script Date: 04/09/2024 3:22:45 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[trnPreProformaCargoHandling](
	[trnPreProformaCargoHandlingID] [int] IDENTITY(1,1) NOT NULL,
	[trnPreProformaID] [int] NULL,
	[CargoType] [varchar](255) NULL,
	[CargoTypeID] [int] NULL,
	[BillCommodity] [varchar](255) NULL,
	[BillCommodityID] [int] NULL,
	[Subcommodity] [varchar](255) NULL,
	[SubcommodityID] [int] NULL,
	[TarrifHead] [varchar](255) NULL,
	[TarrifHeadID] [int] NULL,
	[PackageType] [varchar](255) NULL,
	[PackageTypeID] [int] NULL,
	[UOM] [varchar](255) NULL,
	[UOMID] [int] NULL,
	[QTY] [decimal](10, 2) NULL,
	[Weight] [decimal](10, 2) NULL,
	[Rate] [decimal](10, 2) NOT NULL,
	[Total] [decimal](10, 2) NOT NULL,
	[Discountamt] [decimal](10, 2) NOT NULL,
	[Netamount] [decimal](10, 2) NOT NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL,
	[GSTPer] [decimal](10, 2) NOT NULL,
	[IsFinished] [bit] NOT NULL
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnPreProformaCargoHandling] ADD  CONSTRAINT [DF_trnPreProformaCargoHandling_QTY]  DEFAULT ((0)) FOR [QTY]
GO

ALTER TABLE [dbo].[trnPreProformaCargoHandling] ADD  CONSTRAINT [DF_trnPreProformaCargoHandling_Weight]  DEFAULT ((0)) FOR [Weight]
GO

ALTER TABLE [dbo].[trnPreProformaCargoHandling] ADD  CONSTRAINT [DF_trnPreProformaCargoHandling_Rate]  DEFAULT ((0)) FOR [Rate]
GO

ALTER TABLE [dbo].[trnPreProformaCargoHandling] ADD  CONSTRAINT [DF_trnPreProformaCargoHandling_Total]  DEFAULT ((0)) FOR [Total]
GO

ALTER TABLE [dbo].[trnPreProformaCargoHandling] ADD  CONSTRAINT [DF_trnPreProformaCargoHandling_Discountamt]  DEFAULT ((0)) FOR [Discountamt]
GO

ALTER TABLE [dbo].[trnPreProformaCargoHandling] ADD  CONSTRAINT [DF_trnPreProformaCargoHandling_Netamount]  DEFAULT ((0)) FOR [Netamount]
GO

ALTER TABLE [dbo].[trnPreProformaCargoHandling] ADD  CONSTRAINT [DF_trnPreProformaCargoHandling_Flagdeleted]  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnPreProformaCargoHandling] ADD  CONSTRAINT [DF_trnPreProformaCargoHandling_CreatedDate]  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[trnPreProformaCargoHandling] ADD  DEFAULT ((0)) FOR [GSTPer]
GO

ALTER TABLE [dbo].[trnPreProformaCargoHandling] ADD  DEFAULT ((0)) FOR [IsFinished]
GO
