USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnDocumentLotDetails_History]    Script Date: 01/11/2024 5:29:33 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS(select * from [CFS_BONDED_WAREHOUSE_History].INFORMATION_SCHEMA.TABLES  where  TABLE_NAME='trnDocumentLotDetails_History')
BEGIN
	DROP TABLE [CFS_BONDED_WAREHOUSE_History].[dbo].[trnDocumentLotDetails_History]
END
GO
CREATE TABLE [dbo].[trnDocumentLotDetails_History](
	[trnDocumentLotDetails_HistoryID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnDocumentLotDetailsID] [bigint] NOT NULL,
	[trnDocumentID] [bigint] NOT NULL,
	[LOTNO] [varchar](255) NULL,
	[IGMNo] [varchar](255) NULL,
	[ItemNo] [varchar](255) NULL,
	[IGMDate] [datetime] NULL,
	[BOENo] [varchar](255) NULL,
	[BOEDate] [datetime] NULL,
	[BLNo] [varchar](255) NULL,
	[BLDate] [datetime] NULL,
	[CPStatus] [bit] NULL,
	[CPNo] [varchar](255) NULL,
	[CPDate] [datetime] NULL,
	[CPValidity] [bigint] NULL,
	[CPValidUpto] [datetime] NULL,
	[BondNo] [varchar](255) NULL,
	[BondDate] [datetime] NULL,
	[BondValidUpto] [datetime] NULL,
	[BondValidity] [bigint] NULL,
	[OOCNo] [varchar](255) NULL,
	[OOCDate] [datetime] NULL,
	[EnhanceAVOrDV] [bit] NULL,
	[ConsolerID] [bigint] NULL,
	[ConsolerNAME] [varchar](255) NULL,
	[IMPORTERID] [bigint] NULL,
	[IMPORTERNAME] [varchar](255) NULL,
	[IMPORTERADDRESSID] [bigint] NULL,
	[IMPORTERADDRESSNAME] [varchar](max) NULL,
	[BULKSTATUS] [varchar](255) NULL,
	[SubCHAID] [bigint] NULL,
	[SubCHA] [varchar](255) NULL,
	[CARGODESC] [varchar](255) NULL,
	[GroupCommodityID] [bigint] NULL,
	[GroupCommodity] [varchar](255) NULL,
	[PACKAGETYPEID] [bigint] NULL,
	[PACKAGETYPE] [varchar](255) NULL,
	[COMMODITYID] [bigint] NULL,
	[COMMODITYNAME] [varchar](255) NULL,
	[SUBCOMMODITYID] [bigint] NULL,
	[SUBCOMMODITY] [varchar](255) NULL,
	[NOOFPKGS] [decimal](18, 2) NULL,
	[NOOFPIECES] [decimal](18, 2) NULL,
	[WEIGHT] [decimal](18, 2) NULL,
	[EXCESSBOENOOFPKGS] [decimal](18, 2) NULL,
	[EXCESSBOEWEIGHT] [decimal](18, 2) NULL,
	[MARKSANDNOS] [varchar](255) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[YearID] [int] NULL,
	[LotPrefix] [varchar](255) NULL,
	[BatchID] [int] NULL,
	[BatchName] [varchar](255) NULL,
	[EnhanceAssembleValue] [varchar](255) NULL,
	[EnhanceDutyvalue] [varchar](255) NULL,
	[AssessableValue] [varchar](255) NULL,
	[Dutyvalue] [varchar](255) NULL,
	[Volume] [varchar](255) NULL,
	[Remarks] [varchar](255) NULL,
	[ForwarderID] [int] NULL,
	[Forwarder] [varchar](255) NULL,
	[CargoType] [varchar](255) NULL,
	[IMO] [int] NULL,
	[UN] [int] NULL,
	[TEMP] [int] NULL,
	[CargoTypeID] [int] NULL,
	[NOCDateandTime] [datetime] NULL,
	[NOCValidFrom] [datetime] NULL,
	[NOCValidTo] [datetime] NULL,
	[LicenceNo] [varchar](max) NULL,
	[Caption] [varchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnDocumentLotDetails_History] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnDocumentLotDetails_History] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO


